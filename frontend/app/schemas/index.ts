import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { pb } from "~/api/pocketbase-client";

const requiredFieldMessage = "Поле обязательно";
const wrongValueMessage = "Неверное значение";

const latinOnlyWithNumbersSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+$/, "Недопустимый символ")
  .nonempty(requiredFieldMessage);

export const usernameSchema = latinOnlyWithNumbersSchema.superRefine(
  async (userInput, ctx) => {
    try {
      const collection = "users"

      const userId = pb.authStore!.record!.id;

      const response = await pb
        .collection(collection)
        .getFirstListItem(`username = "${userInput}"`);

      if (response.id !== userId) {
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
    about: z.string(),
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

export type LoginSchema = z.infer<typeof loginSchema> & Record<string, unknown>;

export const loginFormResolver = zodResolver(loginSchema);

const passwordSchema = z
  .string(requiredFieldMessage)
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
    passwordConfirm: z.string(requiredFieldMessage),
    name: z.string(wrongValueMessage).min(2, "Не менее 2-х символов"),
    role: z.string()
  }).refine((data) => data.password === data.passwordConfirm, {
    message: 'Неверный повторный ввод',
    path: ['passwordConfirm'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const registerFormResolver = zodResolver(registerSchema);
