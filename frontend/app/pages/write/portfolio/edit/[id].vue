<template>
  <div>
    <PortfolioArticleCreateForm
      :article-id="articleId"
      :article-data="articleData"
    />
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type {
  ContractorsPostsResponse,
  DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

const route = useRoute();

const articleId = route.params["id"] as string;

const collection = "contractors_posts";

const articleRecord = await pb.collection(collection).getOne<
  ContractorsPostsResponse<{
    contractorServices: DictSpecialtyServicesRecord[];
  }>
>(articleId, {
  expand: "contractorServices",
});

const imageSources = extractImageSrcs(articleRecord.content);

const base64ImageSources = await Promise.all(
  imageSources.map(imageUrlToBase64Client)
);

const contentWithReplacedImages = replaceAllImageSrcs(
  articleRecord.content,
  (_, index) => {
    return base64ImageSources[index]!;
  }
);

const articleData = {
  title: articleRecord.title,
  previewImageIndex: articleRecord.previewImageIndex,
  content: contentWithReplacedImages,
  images: base64ImageSources,
  contractorServices: articleRecord.contractorServices,
  allServicesExpanded: articleRecord.expand.contractorServices
};
</script>

