import { ART } from "@/lib/art/manifest";
import { fallbackSrc, srcSet } from "@/lib/art/srcSet";
import { layerBox } from "@/lib/planet/scene";

/** The family on Earth over the paywall's headline: the landing hero's scene, held still. */
export function PlanetFamily() {
  return (
    <div className="mx-auto -mb-6 w-[200px] md:w-[240px]">
      <div className="planet-stage">
        <img
          className="planet-layer planet-sky"
          src={fallbackSrc(ART.sky)}
          srcset={srcSet(ART.sky)}
          sizes="240px"
          style={layerBox("sky")}
          alt=""
        />
        <div className="planet-float">
          <img
            className="planet-layer planet-planet"
            src={fallbackSrc(ART.planets.earth)}
            srcset={srcSet(ART.planets.earth)}
            sizes="144px"
            style={layerBox("planet")}
            alt=""
            fetchpriority="high"
          />
          <img
            className="planet-layer planet-family"
            src={fallbackSrc(ART.family)}
            srcset={srcSet(ART.family)}
            sizes="106px"
            style={layerBox("family")}
            alt="A parent, a child and another parent holding hands on a small clay planet"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  );
}
