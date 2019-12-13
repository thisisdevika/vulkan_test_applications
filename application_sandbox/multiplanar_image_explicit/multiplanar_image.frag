/* Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#version 450

layout(location = 0) out vec4 out_color;
layout (location = 1) in vec2 texcoord;

layout(set = 0, binding = 2) uniform sampler2D combined_image_sampler;

void main() {
    vec4 color = texture(combined_image_sampler, texcoord);
    //color = color * vec4(1,0,0,0);
    out_color = vec4(color.xyz, 1.0);
}