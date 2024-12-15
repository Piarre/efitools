use winreg::enums::*;
use winreg::RegKey;

#[tauri::command]
fn get_oem_model() -> Result<String, String> {
    let hklm = RegKey::predef(HKEY_LOCAL_MACHINE);
    let subkey = hklm
        .open_subkey("SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\OEMInformation")
        .map_err(|e| format!("Erreur d'ouverture de la clé : {}", e))?;
    let model: String = subkey
        .get_value("Model")
        .map_err(|e| format!("Erreur lors de la lecture de la valeur : {}", e))?;
    Ok(model)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![get_oem_model])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
