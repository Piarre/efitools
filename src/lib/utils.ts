import { getVersion } from "@tauri-apps/api/app"
import { invoke } from "@tauri-apps/api/core"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

const getVersion_ = async () => await getVersion();

const isAtlas = async (): Promise<boolean> => {
  return await invoke("get_oem_model").then((model) => (model as string).toLowerCase().includes("atlas"))
}


export { isAtlas, getVersion_, cn }