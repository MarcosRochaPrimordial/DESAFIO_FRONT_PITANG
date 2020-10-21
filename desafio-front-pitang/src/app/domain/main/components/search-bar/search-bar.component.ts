import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public form: FormGroup;
  @Output() searchButtonPressed: EventEmitter<string> = new EventEmitter<string>();

  get Search() {
    return this.form.get('search');
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      search: [null]
    });
  }

  search() {
    this.searchButtonPressed.emit(this.Search.value);
  }

}
