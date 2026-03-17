import { getCaseStudiesData } from "../lib/case-studies";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function run() {
    console.log("Fetching getCaseStudiesData...");
    const data = await getCaseStudiesData("ja");
    console.log(data.map(d => ({ client: d.client, image: d.image })).slice(0, 5));
}
run();
