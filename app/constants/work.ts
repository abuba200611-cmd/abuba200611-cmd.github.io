import * as THREE from "three";
import { Lang } from "@stores";
import { WorkTimelinePoint } from "../types";

const WORK_TIMELINE_EN: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '',
    title: 'Secondary Education',
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
];

const WORK_TIMELINE_AR: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '',
    title: 'الثانوية العامة',
    subtitle: 'المملكة العربية السعودية',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: 'يوليو 2026',
    title: 'حلقات تحفيظ',
    subtitle: 'مطابقة طلاب القرآن للتسميع',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: 'يوليو 2026',
    title: 'بيرفكت فتنس',
    subtitle: 'موقع نادي رياضي نسائي',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: 'يوليو 2026',
    title: 'حلويات الحفلة',
    subtitle: 'موقع محل حلويات ثلاثي الأبعاد',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'قطرات نحل',
    subtitle: 'أتمتة متجر بالذكاء الاصطناعي (n8n)',
    position: 'right',
  }
];

export const WORK_TIMELINE_BY_LANG: Record<Lang, WorkTimelinePoint[]> = {
  en: WORK_TIMELINE_EN,
  ar: WORK_TIMELINE_AR,
};
