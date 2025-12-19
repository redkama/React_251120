import SubLayout from "../components/SubLayout";
import CommunityBoard from "../components/CommunityBoard";

const Community = () => {
  return (
    <SubLayout
      title="고객의소리"
      desc="고객들의 한마디 한마디에 귀 기울이겠습니다"
      tabs={[
        { label: "공지사항", path: "/community/notice" },
        { label: "고객의소리", path: "/community" },
        { label: "보도자료", path: "/community/news" },
      ]}
    >
      <CommunityBoard />
    </SubLayout>
  );
};

export default Community;
