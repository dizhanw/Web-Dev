import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit(): void {
  this.albumId = Number(this.route.snapshot.paramMap.get('id'));
  this.albumService.getAlbumPhotos(this.albumId).subscribe({
    next: (photos) => {
      this.photos = photos.map(photo => ({
        ...photo,
        thumbnailUrl: `https://picsum.photos/seed/${photo.id}/150/150`
      }));
      this.loading = false;
      this.cdr.detectChanges();
    },
    error: () => {
      this.loading = false;
      this.cdr.detectChanges();
    }
  });
}

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}