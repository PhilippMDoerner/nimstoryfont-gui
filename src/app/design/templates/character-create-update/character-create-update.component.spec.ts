import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreateUpdateComponent } from './character-create-update.component';

describe('CharacterCreateUpdateComponent', () => {
  let component: CharacterCreateUpdateComponent;
  let fixture: ComponentFixture<CharacterCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
