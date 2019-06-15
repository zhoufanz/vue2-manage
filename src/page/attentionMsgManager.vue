<template>
    <div>
     	<head-top></head-top>
        <el-row style="margin-top: 20px;">
  			<el-col :span="14" :offset="4">
  				<header class="form_header">关注消息管理</header>
	  			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="form">
		  			<el-row class="category_select">
                        <el-form-item label="公众号" prop="wxAppStoreValue">
                            <el-select v-model="ruleForm.wxAppStoreValue" multiple placeholder="请选择">
                                <el-option
                                    v-for="item in ruleForm.wxAppStore"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="发送方式" prop="wxMsgSendTypeStoreValue">
                            <el-select v-model="ruleForm.wxMsgSendTypeStoreValue" multiple placeholder="文本">
                                <el-option
                                    v-for="item in ruleForm.wxMsgSendTypeStore"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="" prop="desc">
                            <el-input  type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button  @click="submitForm('ruleForm')">立即创建</el-button>
                            <el-button @click="resetForm('ruleForm')">取消</el-button>
                        </el-form-item>
					</el-row>
	  			</el-form>
  			</el-col>
  		</el-row>
    </div>
</template>

<script>
 	import headTop from '@/components/headTop'
    import {getCategory, addCategory, addFood} from '@/api/getData'
    import {baseUrl, baseImgPath} from '@/config/env'
    export default {
    	data(){
    		return {
    			baseUrl,
    			baseImgPath,
                ruleForm:{
                    wxAppStore:[
                        {value:20,label:'江苏云柜'},
                        {value:21,label:'云柜服务'}
                    ],
                    wxAppStoreValue:'',
                    wxMsgSendTypeStore:[
                        {value:'1',label:'文本'}
                    ],
                    wxMsgSendTypeStoreValue:'1',
                    desc:''
                },
                rules: {
                    desc: [
                        {required: true, message: '请输入消息内容', trigger: 'blur'},
                        {min: 1, max: 1000, message: '长度在 1 到 1000 个字符', trigger: 'blur'}
                    ]
                }
    		}
    	},
    	components: {
    		headTop,
    	},
    	created(){

    	},
    	computed: {

    	},
    	methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .textarea{
        height:300px;
    }
	.form{
		min-width: 400px;
		margin-bottom: 30px;
		&:hover{
			box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
			border-radius: 6px;
			transition: all 400ms;
		}
	}
	.form_header{
		text-align: center;
		margin-bottom: 10px;
	}
	.category_select{
		border: 1px solid #eaeefb;
		padding: 10px 30px 10px 10px;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
	}

	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	}
</style>
