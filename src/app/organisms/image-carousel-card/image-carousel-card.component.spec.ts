import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarouselCardComponent } from './image-carousel-card.component';

describe('ImageCarouselCardComponent', () => {
  let component: ImageCarouselCardComponent;
  let fixture: ComponentFixture<ImageCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCarouselCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
