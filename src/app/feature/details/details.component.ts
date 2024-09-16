import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  @Input('id') productId!: string; /* También se puede utilizar @Input() id!: string; */

  // public productId: string | null = '';
  // private route = inject(ActivatedRoute);

  ngOnInit(): void {
    // this.productId = this.route.snapshot.params?.['id'];
  }
}
