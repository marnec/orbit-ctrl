import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  scene!: Scene;
  camera!: PerspectiveCamera;
  renderer!: WebGLRenderer;
  controls!: OrbitControls;

  ngAfterViewInit(): void {
    const { clientHeight, clientWidth } = this.canvasRef.nativeElement;

    this.scene = new Scene();

    this.camera = new PerspectiveCamera(45, clientWidth / clientHeight, 0.01, 1000);
    this.camera.position.set(5, 5, 5);

    this.controls = new OrbitControls(this.camera, this.canvasRef.nativeElement);
    this.controls.target.set(0, 0, 0);

    this.renderer = new WebGLRenderer({ canvas: this.canvasRef.nativeElement });
    this.renderer.setSize(clientWidth, clientHeight);

    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    this.scene.add(cube);

    window.addEventListener('resize', () => this.onWindowResize());
    this.onWindowResize()
    this.update();
    
  }

  update() {
    requestAnimationFrame(() => this.update());

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.update();
  }
}
