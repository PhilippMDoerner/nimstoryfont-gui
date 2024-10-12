import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterUpdatePageComponent } from './character-update-page.component';

describe('CharacterUpdatePageComponent', () => {
  let component: CharacterUpdatePageComponent;
  let fixture: ComponentFixture<CharacterUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
