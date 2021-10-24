import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReciptConfirmationModelPage } from './recipt-confirmation-model.page';

describe('ReciptConfirmationModelPage', () => {
  let component: ReciptConfirmationModelPage;
  let fixture: ComponentFixture<ReciptConfirmationModelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptConfirmationModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReciptConfirmationModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
