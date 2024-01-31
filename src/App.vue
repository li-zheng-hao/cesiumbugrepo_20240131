<script setup lang="ts">
import { ref } from 'vue';
import NButton from './components/NButton.vue';
const click=()=>alert('click');
const viewer=ref(null)
const tags=ref()
function clickMap(params:any) {
  console.log(params);
  
}
</script>

<template>
  <div class="root"> 
    <vc-viewer @leftClick="clickMap" :ref="viewer">
    <!-- 注记层 -->
    <vc-layer-imagery  :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c"   token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery  :sort-order="10">
      <vc-imagery-provider-tianditu   token="436ce7e50d27eede2f2929307e6b33c0" ref="provider"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-overlay-html :position="{ lng: 104.04, lat: 30.40 }" @click="click" style="display: flex;flex-direction: column;" :ref="tags">
      <NButton></NButton>
      </vc-overlay-html>
  </vc-viewer>
  </div>
</template>

<style scoped>
.root{
  width: 100vw;
  height: 100vh;

}
</style>
