<template>
    <input
    ref="input"
    type="file"
    name="image"
    accept="image/*"
    @change="setImage"
    />
    <div class="post-img">
        <div class="post-img_upload">
            <section class="cropper-area" v-if="!img_set">
                <div class="img-cropper">
                <vue-cropper
                    ref="cropper"
                    :aspect-ratio="16 / 9"
                    :src="imgSrc"
                    preview=".preview"
                    v-if="imgSrc.length > 0"
                />
                </div>
            </section>
            <div class="cropped-image" v-if="img_set">
                <img
                    v-if="cropImg"
                    :src="cropImg"
                    alt="Cropped Image"
                />
                <div v-else class="crop-placeholder" />
            </div>
            <!-- <img src="" /> -->
            <div class="post-img_btn">
                <img src="@/assets/img/svg-new-post/vuesax/linear/maximize-circle.svg" @click.prevent="reset" />
                <img src="@/assets/img/svg-new-post/vuesax/linear/gallery-add.svg" @click.prevent="showFileChooser" />
            </div>
        </div>
    </div>
    <div class="content">
        <section class="cropper-area">
            <div class="actions" v-if="imgSrc">
                <a
                    href="#"
                    role="button"
                    @click.prevent="rotate(90)"
                >
                    Rotate +90deg
                </a>

                <a
                    href="#"
                    role="button"
                    @click.prevent="zoom(0.2)"
                >
                    Zoom In
                </a>

                <a
                    href="#"
                    role="button"
                    @click.prevent="move(10, 0)"
                >
                    Move Right
                </a>
                <a
                    href="#"
                    role="button"
                    class="crop"
                    @click.prevent="cropImage"
                >
                    Crop and set
                </a>
                <a
                    href="#"
                    role="button"
                    @click.prevent="move(-10, 0)"
                >
                    Move Left
                </a>
                <a
                    href="#"
                    role="button"
                    @click.prevent="zoom(-0.2)"
                >
                    Zoom Out
                </a>
                <a
                    href="#"
                    role="button"
                    @click.prevent="rotate(-90)"
                >
                    Rotate -90deg
                </a>

            </div>
        </section>
    </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
export default {
  name: 'post-upload',
  props: {
    location: {
      type: String
    },
    publish: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      imgSrc: '',
      cropImg: '',
      data: null,
      img_set: false
    }
  },
  components: {
    VueCropper
  },
  methods: {
    cropImage () {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.img_set = true
      this.imgSrc = ''
      this.$emit('addImage', [this.location, this.cropImg])
    },
    flipX () {
      const dom = this.$refs.flipX
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleX(scale)
      dom.setAttribute('data-scale', scale)
    },
    flipY () {
      const dom = this.$refs.flipY
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleY(scale)
      dom.setAttribute('data-scale', scale)
    },
    getCropBoxData () {
      this.data = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4)
    },
    getData () {
      this.data = JSON.stringify(this.$refs.cropper.getData(), null, 4)
    },
    move (offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY)
    },
    reset () {
      this.$refs.cropper.reset()
    },
    rotate (deg) {
      this.$refs.cropper.rotate(deg)
    },
    setCropBoxData () {
      if (!this.data) return
      this.$refs.cropper.setCropBoxData(JSON.parse(this.data))
    },
    setData () {
      if (!this.data) return
      this.$refs.cropper.setData(JSON.parse(this.data))
    },
    setImage (e) {
      const file = e.target.files[0]

      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file')
        return
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (this.imgSrc.length > 0) {
            this.imgSrc = event.target.result
            // rebuild cropperjs with the updated source
            this.$refs.cropper.replace(event.target.result)
          } else {
            this.imgSrc = event.target.result
          }
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
    showFileChooser () {
      this.img_set = false
      this.$refs.input.click()
    },
    zoom (percent) {
      this.$refs.cropper.relativeZoom(percent)
    },
    getCroppedCanvas () {

    }
  }
}
</script>
