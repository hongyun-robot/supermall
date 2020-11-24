<template>
  <div class="info">
    <table v-if="itemParams.rule" class="rule">
      <tr v-for="(item, index) of itemParams.rule.tables[0]" :key="index">
        <td v-for="(arr, index) in item" :key="index">{{ arr }}</td>
      </tr>
    </table>
    <table v-if="itemParams.info" class="table_info">
      <tr v-for="(item, index) of itemParams.info.set" :key="index">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template> 
<script>
export default {
  name: "DetailParamsInfo",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

.info {
  border-bottom: 5px solid #f2f5f8;
  padding: 20px 15px;
}

.rule {
  display: flex;
  flex-direction: column;
}

table tr {
  display: flex;
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.rule tr td {
  flex: 1;
}

.table_info {
  margin-top: 15px;
}

.table_info tr {
  display: flex;
}

.table_info tr:last-child {
  margin-bottom: 10px;
}

.table_info tr td:first-child {
  flex: 1;
}

.table_info tr td:last-child {
  flex: 3;
  color: rgb(219, 53, 53);
}
</style>