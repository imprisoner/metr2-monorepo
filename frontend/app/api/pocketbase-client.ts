import PocketBase from "pocketbase";
import type { TypedPocketBase } from "~/types/pocketbase-types";

const baseUrl = import.meta.server ? 'http://backend:8080' : `${window.location.origin}/backend`;

export const pb = new PocketBase(baseUrl) as TypedPocketBase;
