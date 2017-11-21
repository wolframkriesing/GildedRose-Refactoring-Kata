with import (fetchTarball https://github.com/nixos/nixpkgs/tarball/a6172a90be190f5c0f7b7467ddc8e5b471d5493a) { };

stdenv.mkDerivation {
    name = "dev-shell";
    src = null;
    buildInputs = [ nodejs-9_x ];
}
