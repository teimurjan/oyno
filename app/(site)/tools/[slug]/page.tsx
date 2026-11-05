import { toolRoute } from "@/components/site/tools/ToolPage";

const route = toolRoute();

export const dynamicParams = false;
export const generateStaticParams = route.params;
export const generateMetadata = route.metadata;
export default route.Page;
