<template>
  <div>
    <PortfolioArticleCreateForm
      :article-id="articleId"
      :article-data="articleData"
    />
  </div>
</template>

<script setup lang="ts">
import type { ClientResponseError } from "pocketbase";
import { pb } from "~/api/pocketbase-client";
import type {
  ContractorsPostsResponse,
  DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

definePageMeta({
  middleware: ["auth", 'is-contractor'],
});

const route = useRoute();

const articleId = route.params["id"] as string;

const collection = "contractors_posts";

type ContractorsArticleResponse = ContractorsPostsResponse<{
  contractorServices: DictSpecialtyServicesRecord[];
}>;

let articleRecord: ContractorsArticleResponse;

try {
  articleRecord = await pb
    .collection(collection)
    .getOne<ContractorsArticleResponse>(articleId, {
      expand: "contractorServices",
    });
} catch (err) {
  throw createError(err as ClientResponseError);
}

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
  allServicesExpanded: articleRecord.expand.contractorServices,
};
</script>

