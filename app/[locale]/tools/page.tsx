import { toolsIndexRoute } from "@/components/site/tools/ToolPage";

const route = toolsIndexRoute();

export const generateMetadata = route.metadata;
export default route.Page;
