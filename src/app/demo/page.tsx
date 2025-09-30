// src/app/demo/page.tsx
"use client";
import React, { useState } from "react";

import GNB from "@/components/GNB";
import Footer from "@/components/Footer";

import Button, { FilterChip, LabelChip } from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Tag from "@/components/Tag";
import ListCard from "@/components/ListCard";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import SideMenu from "@/components/SideMenu";
import StarRatingInput from "@/components/StarRatingInput";
import CheckItem from "@/components/CheckItem";

// ✅ 정적 import (src/assets/img 안에 실제 파일 존재해야 함)
import iconSearch from "@/assets/img/icon_search.png";
import eyeOff from "@/assets/img/active=off.png";
import eyeOn from "@/assets/img/active=on.png";

export default function DemoPage() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(3);
  const [page, setPage] = useState(2);
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <>
      <GNB isLoggedIn unread={3} />

      <main className="min-h-screen bg-bg-default text-text-primary">
        <div className="mx-auto max-w-[1200px] p-8 space-y-12">
          {/* 헤더 */}
          <header>
            <h1 className="typo-24-b">Design System Demo</h1>
            <p className="mt-2 typo-14-m text-text-secondary">
              피그마 보드 톤으로 컴포넌트 전부 모아보기
            </p>
          </header>

          {/* 2열 */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-10">
            {/* LEFT */}
            <aside className="space-y-6">
              <SideMenu title="샘플 메뉴" />

              <section className="rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-4">
                <h3 className="typo-16-b mb-3">별점</h3>
                <StarRatingInput value={rating} onChange={setRating} />
              </section>

              <section className="rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-4">
                <h3 className="typo-16-b mb-3">체크 아이템</h3>
                <CheckItem
                  checked={agree}
                  onChange={setAgree}
                  label="약관에 동의합니다"
                  description="필수 동의 항목입니다"
                />
              </section>
            </aside>

            {/* RIGHT */}
            <div className="space-y-10">
              {/* Buttons */}
              <section className="rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-6">
                <h2 className="typo-18-b mb-4">Buttons</h2>

                {/* 기본 버튼 */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <Button label="Primary" variant="primary" />
                  <Button label="Secondary" variant="secondary" />
                  <Button label="Ghost" variant="ghost" />
                  <Button label="Danger" variant="danger" />
                  <Button label="Full Width" className="w-60" fullWidth />
                </div>

                {/* 아이콘이 포함된 버튼 */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <Button label="Google 로그인" variant="ghost" leftIcon="google" />
                  <Button label="Google 로그인" variant="primary" leftIcon="google" />
                  <Button label="필터" variant="outline" leftIcon="art" />
                  <Button label="사용자" variant="ghost" leftIcon="user" />
                </div>

                {/* 칩 버튼(필터/라벨) + 아이콘 전용 */}
                <div className="flex flex-wrap items-center gap-3">
                  <FilterChip label="가격" />
                  <FilterChip label="필터" selected />
                  <LabelChip label="라벨" />
                  <Button iconOnly="art" variant="outline" aria-label="필터 열기" />
                  <Button iconOnly="user" variant="ghost" aria-label="사용자" />
                </div>
              </section>

              {/* Inputs */}
              <section className="rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-6">
                <h2 className="typo-18-b mb-4">Inputs</h2>
                <div className="grid gap-4 max-w-lg">
                  {/* 기본 + 눈토글(기본은 눈 없음, password에서만 토글) */}
                  <Input
                    label="비밀번호"
                    placeholder="비밀번호 입력"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    status="default"
                    type="password"
                    showPasswordToggle
                    eyeOffSrc={eyeOff}
                    eyeOnSrc={eyeOn}
                  />
                  {/* 성공 */}
                  <Input
                    label="비밀번호(성공)"
                    placeholder="텍스트"
                    status="success"
                    type="password"
                    showPasswordToggle
                    eyeOffSrc={eyeOff}
                    eyeOnSrc={eyeOn}
                  />
                  {/* 에러 + 메시지 */}
                  <Input
                    label="비밀번호(에러)"
                    placeholder="텍스트"
                    status="error"
                    helpText="message"
                    type="password"
                    showPasswordToggle
                    eyeOffSrc={eyeOff}
                    eyeOnSrc={eyeOn}
                  />
                  {/* 검색: 돋보기 아이콘 */}
                  <Input
                    label="검색"
                    placeholder="텍스트를 입력하세요"
                    leadingIconSrc={iconSearch}
                    leadingIconAlt="검색"
                  />
                </div>
              </section>

              {/* Tags */}
              <section className="rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-6">
                <h2 className="typo-18-b mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="default" label="기본" />
                  <Tag variant="info" label="안내" />
                  <Tag variant="success" label="성공" />
                  <Tag variant="warning" label="경고" />
                  <Tag variant="error" label="오류" />
                </div>

                <h3 className="typo-16-b mt-6 mb-3">예약 상태</h3>
                <div className="flex flex-wrap gap-2">
                  <Tag status="canceled" />
                  <Tag status="completed" />
                  <Tag status="rejected" />
                  <Tag status="experienceDone" />
                  <Tag status="approved" />
                </div>
              </section>

              {/* Cards */}
              <section className="rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-6">
                <h2 className="typo-18-b mb-4">Cards</h2>
                <div className="flex flex-wrap gap-6">
                  <Card className="w-64">
                    <Card.Image src="https://placehold.co/300x200" alt="열기구" />
                    <Card.Content>
                      <div className="flex items-center justify-between">
                        <span className="typo-12-m text-text-secondary">탐방</span>
                        <Tag variant="info" size="sm" label="D+3" />
                      </div>
                      <h3 className="typo-16-b mt-1">열기구 체험</h3>
                      <p className="typo-12-m text-text-secondary mt-1">1시간 · 30km</p>
                    </Card.Content>
                    <Card.Price price="₩35,000~" sub="세금 포함" />
                  </Card>

                  <Card className="w-64">
                    <Card.Image src="https://placehold.co/300x200" alt="샘플" />
                    <Card.Content>
                      <h3 className="typo-16-b">샘플 카드</h3>
                      <p className="typo-12-m text-text-secondary mt-1">설명 텍스트</p>
                    </Card.Content>
                    <Card.Price price="₩29,000" />
                  </Card>
                </div>
              </section>

              {/* List Items */}
              <section className="rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-6">
                <h2 className="typo-18-b mb-4">List</h2>
                <div className="grid gap-4">
                  <ListCard
                    thumbnail="https://placehold.co/96"
                    title="열기구 투어"
                    subtitle="성인 2명 · 09:00~13:30"
                    status="success"
                    statusText="예약완료"
                    price="₩ 35,000~"
                    priceSub="세금 포함"
                    ctaLabel="자세히"
                  />
                  <ListCard
                    thumbnail="https://placehold.co/96"
                    title="사막 지프투어"
                    subtitle="성인 1명 · 10:00~12:00"
                    status="warning"
                    statusText="확인요청"
                    price="₩ 49,000"
                    priceSub="현장결제"
                    ctaLabel="확인"
                  />
                </div>
              </section>

              {/* Pagination + Modal */}
              <section className="rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-6 space-y-4">
                <h2 className="typo-18-b">Pagination & Modal</h2>
                <Pagination page={page} totalPages={5} onChange={setPage} />
                <div>
                  <Button label="모달 열기" onClick={() => setOpen(true)} />
                  <Modal
                    open={open}
                    title="안내"
                    onClose={() => setOpen(false)}
                    onConfirm={() => setOpen(false)}
                    confirmText="확인"
                    cancelText="닫기"
                  >
                    <p className="typo-14-m text-text-secondary">
                      피그마 보드 톤으로 디자인된 모달입니다.
                    </p>
                  </Modal>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
