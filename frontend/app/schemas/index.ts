import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { pb } from "~/api/pocketbase-client";

const requiredFieldMessage = "Поле обязательно";
const wrongValueMessage = "Неверное значение";

const latinOnlyWithNumbersSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+$/, "Недопустимый символ")
  .nonempty(requiredFieldMessage);

export const userNicknameSchema = latinOnlyWithNumbersSchema.superRefine(
  async (userInput, ctx) => {
    try {
      const collection =
        pb.authStore!.record!.collectionName === "users"
          ? "users_info"
          : "contractors_info";

      const userId = pb.authStore!.record!.id;
      const userFieldName =
        pb.authStore!.record!.collectionName === "users"
          ? "user"
          : "contractor";

      const response = await pb
        .collection(collection)
        .getFirstListItem(`nickname = "${userInput}"`);

      if (response[userFieldName] !== userId) {
        ctx.addIssue("Никнейм уже занят");
      }
    } catch (err) {
      console.log(err.status);
      if (err.status !== 404) {
        throw err;
      }
    }
  }
);

export const getProfileInfoResolver = (collection: "users" | "contractors") => {
  const experienceYearsSchema =
    collection === "contractors" ? z.number() : undefined;

  const schemaObj = {
    displayName: z
      .string()
      .regex(/^[^0-9]*$/, { message: "Цифры запрещены" })
      .nonempty({ message: requiredFieldMessage })
      .min(1, { message: requiredFieldMessage }),
    nickname: userNicknameSchema,
    about: z.string(),
    location: z.string(),
    gender: z.string(),
    age: z.number(),
    experienceYears: experienceYearsSchema,
  };

  if (!experienceYearsSchema) {
    delete schemaObj.experienceYears;
  }

  return zodResolver(z.object(schemaObj));
};

export const flatResolver = zodResolver(
  z.object({
    nickname: z.string().min(1, { message: "Никнейм квартиры обязателен" }),
    description: z
      .string()
      .nonempty({ message: "Описание квартиры обязательно" }),
    houseSeries: z.string().nonempty({ message: "Серия дома обязательна" }),
    flatType: z.string().nonempty({ message: "Тип квартиры обязателен" }),
    squareM2: z.string().nonempty({ message: "Площадь квартиры обязательна" }),
    finishing: z.string().nonempty({ message: "Отделка квартиры обязательна" }),
    objectStatus: z.string().nonempty({ message: "Статус объекта обязателен" }),
    buildingCategory: z.string().nonempty({ message: "Тип здания обязателен" }),
  })
);

const loginSchema = z.object({
  email: z.email(wrongValueMessage).nonempty(requiredFieldMessage),
  password: z.string(wrongValueMessage).nonempty(requiredFieldMessage),
});

export type LoginSchema = z.infer<typeof loginSchema> & Record<string, any>;

export const loginFormResolver = zodResolver(loginSchema);

const passwordSchema = z
  .string()
  .regex(/^[a-zA-Z0-9!@#$%^&*]+$/, "Только латинские буквы")
  .min(8, { message: 'Минимум 8 символов' })
  .max(20, { message: 'Максимум 20 символов' })
  .refine((password) => /[A-Z]/.test(password), {
    message: 'Минимум одна заглавная буква',
  })
  .refine((password) => /[a-z]/.test(password), {
    message: 'Минимум одна строчная буква',
  })
  .refine((password) => /[0-9]/.test(password), { message: 'Минимум одна цифра' })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Минимум один специальный символ",
  })

const registerSchema = z
  .object({
    email: z.email(wrongValueMessage).nonempty(requiredFieldMessage),
    password: passwordSchema,
    passwordConfirm: z.string(),
    name: z.string(wrongValueMessage).min(2, "Не менее 2-х символов"),
  }).refine((data) => data.password === data.passwordConfirm, {
    message: 'Неверный повторный ввод',
    path: ['passwordConfirm'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const registerFormResolver = zodResolver(registerSchema);
