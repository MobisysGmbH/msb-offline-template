/// <reference types="@mobisysgmbh/msb-offline-api" />

class OfflineScript implements IOfflineScript {

  // uncomment only lines needed for your application

  // private appInfo: IAppInfo;
  // private asyncJs: IAsyncJs;
  private connectionInfo: IConnectionInfo;
  // private db: ISQLiteDatabase;
  // private fileRepo: IFileRepository;
  // private keyValueStorage: IKeyValueStorage;
  private logger: ILogger;
  // private synchronization: ISynchronization;

  public init(registry: IServiceRegistry, symbols: IOfflineScriptSymbols) {
    // request Offline services needed in your application here
    // and save instances as members of this class

    // uncomment only lines needed for your application

    // this.asyncJs = registry.get(symbols.SAsyncJs);
    this.connectionInfo = registry.get(symbols.SConnectionInfo);
    // this.db = registry.get(symbols.SSQLiteDatabase);
    // this.fileRepo = registry.get(symbols.SFileRepository);
    // this.keyValueStorage = registry.get(symbols.SKeyValueStorage);
    this.logger = registry.get(symbols.SLogger);
    // this.synchronization = registry.get(symbols.SSynchronization);
  }

  public onStart(): void | Promise<void> {
    // implement application initialization logic here

    // e.g. register handlers for connection state change
    this.connectionInfo.addHandler('Online', () => this.logger.info('connection available'));
    this.connectionInfo.addHandler('Offline', () => this.logger.info('connection lost'));
  }

  public onKill(): void | Promise<void> {
    // implement cleanup logic here

    // e.g. clear registered handler functions
    this.connectionInfo.clearHandler();
  }

  public MAIN_1_PBO: IOfflinePboMethod = (request, response, components, values, callback) => {
    // implement business logic here to be "Processed Before Output"

    // don't forget to call callback otherwise the application will be blocked
    callback();
  }

  public MAIN_1_PAI: IOfflinePaiMethod = (request, response, components, values, callback) => {
    // implement business logic here to be "Processed After Input"

    // don't forget to call callback otherwise the application will be blocked
    callback();
  }
}