import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saveSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editTitle = album.title;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    this.saving = true;
    const updated: Album = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        if (this.album) this.album.title = this.editTitle;
        this.saving = false;
        this.saveSuccess = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.saveSuccess = false;
          this.cdr.detectChanges();
        }, 2500);
      },
      error: () => {
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }

  viewPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}