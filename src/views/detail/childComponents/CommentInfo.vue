<template>
  <div class="comment_info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment_top">
      <span>用户评价</span>
      <span>更多({{ commentInfo.cRate }}) ></span>
    </div>
    <div class="comment_user">
      <img :src="commentInfo.list[0].user.avatar" />
      <span>{{ commentInfo.list[0].user.uname }}</span>
      <p>{{ commentInfo.list[0].content }}</p>
    </div>
    <div class="comment_data">
      <span>{{ commentInfo.list[0].created | showData }}</span>
      <span>{{ commentInfo.list[0].style }}</span>
    </div>
  </div>
</template> 
<script>
import { format } from "common/untils";

export default {
  name: "CommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showData(data) {
      return format(data, "yyyy/MM/dd hh:mm:ss");
    },
  },
};
</script>
<style scoped>
.comment_info {
  padding: 0.2rem 0.15rem;
  border-bottom: 0.05rem solid #f2f5f8;
}

.comment_top {
  font-size: 0.16rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.comment_user {
  margin: 10px 0;
}

.comment_user img {
  width: 0.42rem;
  border-radius: 50%;
  margin-bottom: 0.09rem;
}

.comment_user span {
  margin-left: 0.15rem;
  font-size: 0.16rem;
}

.comment_user p {
  text-indent: 2em;
  line-height: 0.25rem;
}

.comment_data {
  margin-bottom: 0.1rem;
  color: #999;
}

.comment_data span:last-child {
  margin-left: 0.08rem;
}
</style>