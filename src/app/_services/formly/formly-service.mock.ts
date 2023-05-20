import { OverviewService } from "../article/overview.service";
import { OverviewServiceMock } from "../article/overview.service.mock";
import { FormlyService } from "./formly-service.service";

export const FormlyProvider = { 
  provide: FormlyService, 
  useFactory: () => {
    const overviewService: OverviewService = new OverviewServiceMock() as unknown as OverviewService;
    return new FormlyService(overviewService);
  } 
}