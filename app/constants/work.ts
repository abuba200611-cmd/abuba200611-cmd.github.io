import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '',
    title: 'Education',
    subtitle: 'General Certificate, Saudi Arabia',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: 'Jul 2026',
    title: 'Halaqat Tahfeez',
    subtitle: 'Quran Memorization Matching App',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: 'Jul 2026',
    title: 'Perfect Fitness',
    subtitle: "Women's Gym Website",
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: 'Jul 2026',
    title: 'Halawiyat Alhafla',
    subtitle: '3D Bakery Website',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Qatarat Nahl',
    subtitle: 'AI Store Automation (n8n)',
    position: 'right',
  }
]