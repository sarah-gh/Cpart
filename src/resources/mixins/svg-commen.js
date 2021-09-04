export const svgCommen = {
    props: {
        height: String,
        width: String,
        color: String,
    },

    data() {
        return {
            heightData: this.height,
            widthData: this.width,
            colorData:'#' + this.color,
            heightData2: this.height / 4,
            widthData2: this.width / 4,
        };
    },
}