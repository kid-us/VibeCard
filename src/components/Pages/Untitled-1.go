 {/* Images */}
                  <div className="grid grid-cols-3 gap-x-2">
                    {/* Profile */}
                    <InputImages
                      title="Profile Picture"
                      type="profile"
                      onPreviewChange={handlePreviewChange}
                    />
                    {/* Logo */}
                    <InputImages
                      title="Company Logo"
                      type="logo"
                      onPreviewChange={handlePreviewChange}
                    />
                    {/* Cover */}
                    <InputImages
                      title="Cover Photo"
                      type="cover"
                      onPreviewChange={handlePreviewChange}
                    />
                  </div>
                  {/* Inputs */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {/* Pronoun */}
                    <div className="mb-4">
                      <label
                        className="text-xs text-gray-600 block"
                        htmlFor="pronoun"
                      >
                        Pronoun <span className="text-red-700 text-2xl">*</span>
                      </label>

                      <select
                        name="pronoun"
                        className="bg-gray-200 py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black"
                        onChange={(event) =>
                          setPronoun(event.currentTarget.value)
                        }
                        defaultValue={pronoun}
                      >
                        <option value="" hidden></option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Prof">Professor</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>
                    {/* Name */}
                    <InputFields
                      label="name"
                      type="text"
                      inputName="Name"
                      name={(name: string) => setName(name)}
                      value={name}
                      required
                    />
                    {/* Email */}
                    <InputFields
                      label="email"
                      type="email"
                      inputName="Email"
                      emailAddress={(email: string) => handleEmail(email)}
                      value={email}
                      required
                    />
                    {/* Phone */}
                    <InputFields
                      label="phone"
                      type="tel"
                      inputName="Phone"
                      phone={(phone: string) => handlePhone(phone)}
                      value={phone}
                      required
                    />
                    {/* Job-Title */}
                    <InputFields
                      label="job-title"
                      type="text"
                      inputName="Job Title"
                      jobTitle={(job: string) => setJobTitle(job)}
                      value={jobTitle}
                      required
                    />
                    {/* Location */}
                    <InputFields
                      label="location"
                      type="text"
                      inputName="Location"
                      location={(location: string) => setLocation(location)}
                      value={location}
                      required
                    />
                    {/* Company */}
                    <InputFields
                      label="company"
                      type="text"
                      inputName="Company"
                      company={(company: string) => setCompany(company)}
                      value={company}
                      required
                    />
                    {/* Tag-line */}
                    <InputFields
                      label="tag-line"
                      type="text"
                      inputName="Tag Line"
                      tag={(tag: string) => setTagLine(tag)}
                      value={tagLine}
                      required={false}
                    />
                  </div>