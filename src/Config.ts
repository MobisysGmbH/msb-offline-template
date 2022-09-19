/// <reference types="@mobisysgmbh/msb-offline-api" />
/// <reference path="./OfflineScript.ts" />

registry.registerInstance(symbols.SOfflineConfig, { apiVersion: 2 } as IOfflineConfig)
registry.registerSingleton(symbols.SOfflineScript, OfflineScript);