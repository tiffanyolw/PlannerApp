import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubpageHeaderbarComponent } from './subpage-headerbar.component';

describe('SubpageHeaderbarComponent', () => {
  let component: SubpageHeaderbarComponent;
  let fixture: ComponentFixture<SubpageHeaderbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageHeaderbarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubpageHeaderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
