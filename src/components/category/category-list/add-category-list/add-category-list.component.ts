import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-category-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './add-category-list.component.html',
  styleUrl: './add-category-list.component.css'
})
export class AddCategoryListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  categoryListId: number = 0;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((route) => {

      this.categoryListId = route["CategoryListId"];

      console.log(JSON.stringify(this.categoryListId))
    });

  }

}
