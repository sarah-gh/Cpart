<!-- eslint-disable no-tabs -->
<template>
    <div class="photo-upload">
		<div class="file-upload-form">
			<input
				type="file"
				@change="previewThumbnail"
				name="photo-upload-button"
				id="photo-upload-button"
				accept="image/*"
				class="input-file"
			/>
			<label for="photo-upload-button">upload avatar</label>
		</div>
		<div
			class="image-preview"
			v-if="imageData.length > 0"
		>
			<img
				:src="imageData"
				class="image-preview__img"
			>
		</div>
	</div>
</template>

<script>
export default {
  name: 'photo-upload',
  props: {
    imgData: {
      type: String
    }
  },
  data () {
    return {
      imageData: '',
      imgBase64: ''
    }
  },
  mounted () {
    setTimeout(() => {
      // console.log('xhr')
      this.imageData = this.imgData
    }, 700)
  },
  emits: ['emitImg'],
  methods: {
    previewThumbnail: function getPreview (event) {
      const input = event.target
      if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(input.files[0])
        setTimeout(() => {
          const img = document.querySelector('.image-preview__img').src
          this.imgBase64 = img
          this.$emit('emitImg', img)
        }, 1000)
      }
    }
  }
}
</script>

<!-- eslint-disable no-tabs -->
<style lang="scss" scoped>

.photo-upload {
	height: auto;
	margin: 20px 0;
	position: relative;
	text-align: center;
	width: 100%;
    .add_gallery{
        position: absolute;
        top: 40%;
        left: 40%;
		z-index: 100;
    }
}
.file-upload-form {
    label{
        width: 165px !important;
        height: 165px !important;
        line-height: 165px !important;
		position: relative;
		&::after {
            content: url("../../../../assets/img/svg-profile-setting/bold/gallery.svg");
            position: absolute;
            top: 10%;
			left: 37%;
            background-color: transparent;
            pointer-events: none;
			z-index: 100;
        }
    }
}
.input-file {
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	width: 0.1px;
	z-index: -1;
	// &:focus {
	// 	& + label {
	// 		// border-color: #0070d3;
	// 	}
	// }
	& + label {
		background: transparent;
		// border: 2px solid #bc0087;
		border-radius: 50%;
		color: #5b5b5b;
		display: inline-block;
		font-size: 12pt;
		font-weight: 500;
		height: 200px;
		line-height: 200px;
		text-align: center;
		width: 200px;
	}
}
.input-file + label:hover,
.input-file + label:focus {
	// border-color: #0070d3;
	cursor: pointer;
}
.image-preview {
	border-radius: 50%;
	height: 165px;
	left: -4px;
	margin: 0 auto;
	pointer-events: none;
	position: absolute;
	right: 0;
	top: 0;
	width: 165px;
}
.image-preview__img {
	// border: 2px solid #bc0087;
	border-radius: 50%;
	height: 165px;
	object-fit: cover;
	object-position: center;
	width: 165px;
	filter: brightness(0.5);
}
</style>
