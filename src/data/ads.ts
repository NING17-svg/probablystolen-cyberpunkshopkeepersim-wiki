import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Every key matches ad-placement-manifest.json. Codes stay empty until the
// Adsterra Integrator binds real units against this site's final list.
export const ads: AdConfig = {
  units: {
    "page-top-desktop": "<script>\n  atOptions = {\n    'key' : 'e3d75c9ed69914b2385dfaa478627860',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e3d75c9ed69914b2385dfaa478627860\"></script>",
    "page-top-mobile": "<script>\n  atOptions = {\n    'key' : '3f7079bad4ca01eccc62cc3794f66418',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/3f7079bad4ca01eccc62cc3794f66418\"></script>",
    "home-topic-break-desktop": "<script>\n  atOptions = {\n    'key' : 'e2a5c41b4d4a2bf145771809aa5bb075',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e2a5c41b4d4a2bf145771809aa5bb075\"></script>",
    "home-topic-break-mobile": "<script>\n  atOptions = {\n    'key' : '67be325a7f632770221cd2e47a8edfb3',\n    'format' : 'iframe',\n    'height' : 250,\n    'width' : 300,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/67be325a7f632770221cd2e47a8edfb3\"></script>",
    "home-directory-end-desktop": "<script>\n  atOptions = {\n    'key' : 'e2a5c41b4d4a2bf145771809aa5bb075',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e2a5c41b4d4a2bf145771809aa5bb075\"></script>",
    "home-directory-end-mobile": "<script>\n  atOptions = {\n    'key' : '3f7079bad4ca01eccc62cc3794f66418',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/3f7079bad4ca01eccc62cc3794f66418\"></script>",
    "guide-native-mobile": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/d16325086a1f9131754ff8958dc2e805\"></script>\n<div id=\"container-d16325086a1f9131754ff8958dc2e805\"></div>",
    "guide-section-break-desktop": "<script>\n  atOptions = {\n    'key' : 'e2a5c41b4d4a2bf145771809aa5bb075',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e2a5c41b4d4a2bf145771809aa5bb075\"></script>",
    "guide-section-break-mobile": "<script>\n  atOptions = {\n    'key' : '3f7079bad4ca01eccc62cc3794f66418',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/3f7079bad4ca01eccc62cc3794f66418\"></script>",
    "guide-section-break-2-desktop": "<script>\n  atOptions = {\n    'key' : 'e2a5c41b4d4a2bf145771809aa5bb075',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e2a5c41b4d4a2bf145771809aa5bb075\"></script>",
    "guide-section-break-2-mobile": "<script>\n  atOptions = {\n    'key' : '3f7079bad4ca01eccc62cc3794f66418',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/3f7079bad4ca01eccc62cc3794f66418\"></script>",
    "guide-before-faq-desktop": "<script>\n  atOptions = {\n    'key' : 'e2a5c41b4d4a2bf145771809aa5bb075',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e2a5c41b4d4a2bf145771809aa5bb075\"></script>",
    "guide-before-faq-mobile": "<script>\n  atOptions = {\n    'key' : '3f7079bad4ca01eccc62cc3794f66418',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/3f7079bad4ca01eccc62cc3794f66418\"></script>",
    "guide-rail-desktop": "<script>\n  atOptions = {\n    'key' : '9b3c10e175cfe68d2d4084d23e0f689b',\n    'format' : 'iframe',\n    'height' : 300,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/9b3c10e175cfe68d2d4084d23e0f689b\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/fe4fe5ecbf133cf5a9bb1fda4f8ec56c",
  },
};

export const adInventory = inventory;