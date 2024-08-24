'use client'

import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();

    const clickHandler = () => {
        
        
        router.push('/')
        // replace 기록 안남기기
        // back 뒤로 가기
    }

  return (
    <>
      <h1>Order Product</h1>
      <button className="p-2 text-white bg-black border" onClick={clickHandler}>
        주문하기
      </button>
    </>
  );
}
