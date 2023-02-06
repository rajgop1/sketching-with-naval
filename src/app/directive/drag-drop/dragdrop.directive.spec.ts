import { DragdropDirective } from "./dragdrop.directive";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { DomSanitizer } from "@angular/platform-browser";

describe('DragdropDirective', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DragdropDirective
      ],
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: () => 'safeString',
            bypassSecurityTrustHtml: () => 'safeString'
          }
        }
      ]
    }).compileComponents();
  }));
});
