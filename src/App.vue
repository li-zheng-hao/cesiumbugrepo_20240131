<script setup lang="ts">
</script>

<template>
  <div class="root"> 
    <vc-viewer>
    <!-- 注记层 -->
    <vc-layer-imagery  :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c"   token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery  :sort-order="10">
      <vc-imagery-provider-tianditu   token="436ce7e50d27eede2f2929307e6b33c0" ref="provider"></vc-imagery-provider-tianditu>
      
    </vc-layer-imagery>
  </vc-viewer>
  </div>
</template>

<style scoped>
.root{
  width: 100vw;
  height: 100vh;

}
</style>
