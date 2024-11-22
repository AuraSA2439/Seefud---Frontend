<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <main class="dashboard-layout">
    <Sidebar />
    <div class="main">
      <div class="frame white">
        <div class="info">
          <div class="status yellow-300" id="total_user">
            <div class="title-hor base bold">
              <span class="material-icons">group</span>
              Total User
            </div>
            <div class="stats xl bold">2143</div>
          </div>
          <div class="status red-300" id="total_consumer">
            <div class="title-hor base bold">
              <span class="material-icons">mood</span>
              Total Consumer
            </div>
            <div class="stats xl bold">2143</div>
          </div>
          <div class="status green-300" id="total_vendor">
            <div class="title-hor base bold">
              <span class="material-icons">restaurant</span>
              Total Vendor
            </div>
            <div class="stats xl bold">2143</div>
          </div>
          <div class="status blue-300" id="total_report">
            <div class="title-hor base bold">
              <span class="material-icons">gpp_maybe</span>
              Total Report
            </div>
            <div class="stats xl bold">2143</div>
          </div>
        </div>
        <div class="navigation">
          <div class="title-ver">
            <span class="material-icons">update</span>
            <div class="xl bold">Latest Reports</div>
          </div>
        </div>
        <div class="content">
          <div class="table"></div>
        </div>
      </div>
    </div>
  </main>
</template>
