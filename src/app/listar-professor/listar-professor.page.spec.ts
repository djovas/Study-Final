import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarProfessorPage } from './listar-professor.page';

describe('ListarProfessorPage', () => {
  let component: ListarProfessorPage;
  let fixture: ComponentFixture<ListarProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProfessorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
