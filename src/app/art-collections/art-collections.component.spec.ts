import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCollectionsComponent } from './art-collections.component';

describe('ArtCollectionsComponent', () => {
  let component: ArtCollectionsComponent;
  let fixture: ComponentFixture<ArtCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
