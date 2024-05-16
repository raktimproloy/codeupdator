  // Import metadata and explicitly type it using the Metadata interface
  import metadata from "@/store/json/metadata.json";
  
  // Now use the Metadata interface to type path
  export function getMetadata({ path }) {
    const result = metadata.hasOwnProperty(path) ? metadata[path] : metadata.default;
    return result;
  }
  