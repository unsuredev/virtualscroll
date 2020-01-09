import { Component, OnInit } from "@angular/core";
import { ArtistsService } from "../artists.service";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.css"]
})
export class ArtistsComponent implements OnInit {
  constructor(private _artistsService: ArtistsService) {}
  artists = [];

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.artists = this._artistsService.getArtists();
  }
}
