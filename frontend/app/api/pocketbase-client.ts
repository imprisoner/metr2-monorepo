import PocketBase from "pocketbase";
import type { TypedPocketBase } from "~/types/pocketbase-types";

const baseUrl = "http://127.0.0.1:8090";

export const pb = new PocketBase(baseUrl) as TypedPocketBase;
