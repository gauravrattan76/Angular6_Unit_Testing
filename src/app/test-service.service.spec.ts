import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TestServiceService } from './test-service.service';

describe('CustomHttpService', () => {
  let service: TestServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [TestServiceService],
      });

      // inject the service
      service = TestBed.get(TestServiceService);
      httpMock = TestBed.get(HttpTestingController);
  });

  it('should get the data successful', () => {
    let mockData = [
      {
        "id": 1,
        "name": "Mark",
        "gender": "Male",
        "contactPreference": "Email",
        "email": "mark@pragimtech.com",
        "dateOfBirth": "1988/10/25",
        "department": "3",
        "isActive": true
      },
      {
        "id": 2,
        "name": "Mary",
        "gender": "Female",
        "contactPreference": "Phone",
        "phoneNumber": 2345978640,
        "dateOfBirth": "1979/11/20",
        "department": "2",
        "isActive": true
      },
      {
        "id": 3,
        "name": "John",
        "gender": "Male",
        "contactPreference": "Phone",
        "phoneNumber": 5432978640,
        "dateOfBirth": "1976/3/25",
        "department": "3",
        "isActive": false
      }
    ];
    
    service.getEmployee().subscribe((data: any[]) => {
      expect(data).toEqual(mockData);
      expect(data.length).toBe(3);
    });
    const req = httpMock.expectOne("http://localhost:3000/employees");
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    httpMock.verify();
  });
});
