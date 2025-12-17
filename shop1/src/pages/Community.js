import SubLayout from "../components/SubLayout";

const Community = () => {
    return (
        <SubLayout
            title="공지사항"
            desc="맛닭꼬의 새로운 소식을 전해드립니다"
            tabs={[
                { label: "공지사항", path: "/community" },
                { label: "고객의 소리", path: "/community/" },
                { label: "보도자료", path: "/community/" },
            ]}
            >
            {/* 실제 콘텐츠 */}
            <div>메뉴 리스트 영역</div>
        </SubLayout>
    );
};

export default Community;