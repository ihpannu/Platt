<template>
  <main>
    <AppHeader class="header" />
    <SubHeader class="sub-header" />
    <Categories class="categories" />
    <ProductMarket class="product-market" />
    <Deals class="deals" />
    <GetStarted class="get-started" />
    <RecentlyViewed class="recently-viewed" />
    <QuickLinks class="quick-links" />
    <Banner class="banner" />
    <AppFooter class="footer" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./components/Banner.vue";
import AppFooter from "./components/Footer.vue";
import Categories from "./components/Categories.vue";
import Deals from "./components/Deals.vue";
import GetStarted from "./components/GetStarted.vue";
import AppHeader from "./components/Header.vue";
import QuickLinks from "./components/QuickLinks.vue";
import RecentlyViewed from "./components/RecentlyViewed.vue";
import SubHeader from "./components/SubHeader.vue";
import ProductMarket from "./components/ProductMarket.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    SubHeader,
    Categories,
    Deals,
    GetStarted,
    RecentlyViewed,
    QuickLinks,
    Banner,
    AppFooter,
    ProductMarket,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
main {
  scroll-behavior: smooth;
  display: grid;
  grid-auto-columns: auto;
  grid-template-areas:
    "header"
    "sub-header"
    "categories"
    "deals"
    "get-started"
    "recently-viewed"
    "quick-links"
    "banner"
    "footer";
}

@media (min-width: 1024px) {
  main {
    grid-auto-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "sub-header sub-header"
      "product-market product-market"
      "get-started get-started"
      "deals recently-viewed"
      "quick-links quick-links"
      "banner banner"
      "footer footer";
  }
}

.header {
  grid-area: header;
}
.sub-header {
  grid-area: sub-header;
}
.product-market {
  grid-area: product-market;
}
.categories {
  grid-area: categories;
}
.deals {
  grid-area: deals;
}
.get-started {
  grid-area: get-started;
}
.recently-viewed {
  grid-area: recently-viewed;
}
.quick-links {
  grid-area: quick-links;
}
.banner {
  grid-area: banner;
}
.footer {
  grid-area: footer;
}
</style>