import Image from 'next/image';
import HomePage from '@/components/pages/Home';
import {getMetadata} from "@/utils/getMetadata"
import { Metadata } from 'next';

const meta = getMetadata({ path: "home" });
export const metadata: Metadata = meta;

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  )
}
