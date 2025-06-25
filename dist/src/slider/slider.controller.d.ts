import { SliderService } from './slider.service';
export declare class SliderController {
    private readonly sliderService;
    constructor(sliderService: SliderService);
    getAll(): Promise<{
        id: number;
        link: string;
        image: string;
    }[]>;
}
